let selectedFiles = [];

function updateFilePreview() {
  const previewContainer = document.getElementById("filePreview");
  previewContainer.innerHTML = "";

  selectedFiles.forEach((file, index) => {
    let fileItem = document.createElement("div");

    // Add the file number (index + 1)
    let fileNumber = document.createElement("span");
    fileNumber.innerText = `File ${index + 1}: `;
    fileItem.appendChild(fileNumber);

    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.style.width = "50px";
    img.style.height = "50px";

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = () => {
      selectedFiles.splice(index, 1);
      updateFilePreview(); // Re-render the preview to update the numbers
    };

    fileItem.appendChild(img);
    fileItem.appendChild(deleteButton);
    previewContainer.appendChild(fileItem);
  });
}

document.getElementById("fileInput").addEventListener("change", (event) => {
  selectedFiles = Array.from(event.target.files);
  updateFilePreview();
});

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateSkinPack() {
  const files = selectedFiles;
  let packName = document.getElementById("packName").value || "MySkinPack";

  // Replace spaces with hyphens in pack name
  packName = packName.replace(/\s+/g, "-");

  if (files.length === 0) {
    alert("Please upload PNG files");
    return;
  }

  let zip = new JSZip();
  let manifest = {
    format_version: 2,
    header: {
      name: packName,
      uuid: generateUUID(),
      version: [1, 0, 0],
    },
    modules: [
      {
        type: "skin_pack",
        uuid: generateUUID(),
        version: [1, 0, 0],
      },
    ],
  };

  let skins = { skins: [], serialize_name: packName };

  Array.from(files).forEach((file) => {
    let skinName = file.name.replace(".png", "");
    let skinObj = {
      localization_name: skinName,
      geometry: "geometry.humanoid.custom",
      texture: file.name,
      type: "free",
    };
    skins.skins.push(skinObj);
    zip.file(file.name, file);
  });

  zip.file("manifest.json", JSON.stringify(manifest, null, 2));
  zip.file("skins.json", JSON.stringify(skins, null, 2));

  zip.generateAsync({ type: "blob" }).then(function (content) {
    let downloadLink = document.getElementById("downloadLink");
    let a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = packName + ".mcpack";
    a.innerText = "Download " + packName + ".mcpack";
    downloadLink.innerHTML = "";
    downloadLink.appendChild(a);
  });
}
