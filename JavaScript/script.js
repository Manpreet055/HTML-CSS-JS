let form = document.querySelector("form");
        async function postData(formName) {
          let formData = new FormData(formName);
          let uploadData = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
              method: "POST",
              body: formData,
            }
          );
          let uploadedData = await uploadData.json();
          return uploadedData;

        }
        async function getuploadedData(postData){
          let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postData.id}`);
          let getData = await response.json();
          console.log(getData);
        }
        form.addEventListener("submit",async (event) => {
          event.preventDefault();
            let uploadedData = await postData(form);
            getuploadedData(uploadedData);
        });