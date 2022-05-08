
let pageTitleElement;
let outputGridElement;
let showDisplayElement;


let showCollection = [
  {
    "showTitle" : "25 21",
    "type" : "kdramas",
    "id": "2521",
    "myreview" : "5 stars",
    "image" : "2521.jpeg"
  },
  {
    "showTitle" : "Demon Slayer",
    "type" : "anime",
    "id": "demonslayer",
    "myreview" : "4.5 stars",
    "image" : "demonslayer.jpg"
  },
  {
    "showTitle" : "Hunter X Hunter",
    "type" : "anime",
    "id": "hxh",
    "myreview" : "5 stars",
    "image" : "hunter.jpg"
  },
  {
    "showTitle" : "Deathnote",
    "type" : "anime",
    "id": "deathnote",
    "myreview" : "4 stars",
    "image" : "deathnote.jpg"
    },
  {
    "showTitle" : "Vincenzo",
    "type" : "kdramas",
    "id": "vincenzo",
    "myreview" : "4 stars",
    "image" : "vincenzo.jpeg"
  },
  {
    "showTitle" : "Community",
    "type" : "tvshows",
    "id": "community",
    "myreview" : "3.5 stars",
    "image" : "community.jpg"
    },
  {
    "showTitle" : "Bridgerton",
    "type" : "tvshows",
    "id": "bridgerton",
    "myreview" : "4.5 stars",
    "image" : "bridgerton.jpg"
  },
  {
    "showTitle" : "Euphoria",
    "type" : "tvshows",
    "id": "euphoria",
    "myreview" : "3.5 stars",
    "image" : "euphoria.jpg"
  },
  {
    "showTitle" : "Mr. Sunshine",
    "type" : "kdramas",
    "id": "sunshine",
    "myreview" : "3 stars",
    "image" : "sunshine.jpg"
    },
  {
    "showTitle" : "Saiki K",
    "type" : "anime",
    "id": "saiki",
    "myreview" : "4.5 stars",
    "image" : "saiki.jpg"
  },
  {
    "showTitle" : "Our Beloved Summer",
    "type" : "kdramas",
    "id": "summer",
    "myreview" : "4 stars",
    "description" : "In a time when dreams seem out of reach, a teen fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life. At ages 22 and 18, they say each other's names for the first time, and at ages 25 and 21, they fall in love.",
    "image" : "ourbelovedsummer.png"
  },
  {
    "showTitle" : "Business Proposal",
    "type" : "kdramas",
    "id": "biz",
    "myreview" : "3.5 stars",
    "image" : "businessproposal.jpeg"
  },
  {
    "showTitle" : "Extracurricular",
    "type" : "kdramas",
    "id": "extra",
    "myreview" : "5 stars",
    "image" : "extracurricular.jpeg"
  },
  {
    "showTitle" : "Prison Playbook",
    "type" : "kdramas",
    "id": "prison",
    "myreview" : "5 stars",
    "description" : "In a time when dreams seem out of reach, a teen fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life. At ages 22 and 18, they say each other's names for the first time, and at ages 25 and 21, they fall in love.",
    "image" : "prisonplaybook.webp"
  },
  {
    "showTitle" : "Stranger Things",
    "type" : "tvshows",
    "id": "stranger",
    "myreview" : "4.5 stars",
    "image" : "strangerthings.jpg"
  }];


  document.addEventListener("DOMContentLoaded", function(){

    pageTitleElement = document.getElementById("showTitle");
    outputGridElement = document.getElementById("outputGrid");
    showsDisplayElement = document.getElementById("showsDisplay");
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let urlSection = urlParams.get('section');
    let urlID = urlParams.get('id');

    if (urlSection != "item") {
      if (urlSection == "anime") {
      }
      else if (urlSection == "kdramas") {
      }
      for (let i = 0; i < showCollection.length; i++) {
        if (showCollection[i]["type"] == urlSection || urlSection == "" || urlSection == null){
          createProjectPreview(showCollection[i]);
        }
      }

    }

    else {
      for (let i = 0; i < showCollection.length; i++) {
        if (showCollection[i]["id"] == urlID) {
          createProjectPage(showCollection[i]);
        }
      }
    }

  });


  function createProjectPreview(incomingJSON){

    let newPreviewLink = document.createElement("A");
    newPreviewLink.href = "index.html?section=item&id=" + incomingJSON["id"];

    let newPreviewElement = document.createElement("DIV");
    newPreviewLink.appendChild(newPreviewElement);

    let newPreviewTitle = document.createElement("P");
    newPreviewTitle.classList.add("previewTitle");
    newPreviewTitle.innerText = incomingJSON["showTitle"];
    newPreviewElement.appendChild(newPreviewTitle);

    let newPreviewThumbnail = document.createElement("IMG");
    newPreviewThumbnail.classList.add("thumbnail");
    newPreviewThumbnail.src = incomingJSON["image"];
    newPreviewElement.appendChild(newPreviewThumbnail);

    outputGridElement.appendChild(newPreviewLink);

  }

  function createProjectPage(incomingJSON) {

  let newProjectElement = document.createElement("DIV");

  let newTitle = document.createElement("P");
  newTitle.classList.add("showTitle");
  newTitle.innerText = incomingJSON["showTitle"];
  newProjectElement.appendChild(newTitle);

  let newMainImage = document.createElement("IMG");
  newMainImage.classList.add("mainImage");
  newMainImage.src = incomingJSON["image"];
  newProjectElement.appendChild(newMainImage);

  let newProjectDescription = document.createElement("P");
  newProjectDescription.classList.add("description");
  newProjectDescription.innerText = incomingJSON["description"];
  newProjectElement.appendChild(newProjectDescription);

  showDisplayElement.appendChild(newProjectElement);

}
