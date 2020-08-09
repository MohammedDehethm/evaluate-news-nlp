import { checkForName } from './nameChecker'

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (checkForName(formText)) {
        console.log("::: Form Submitted :::")
        fetch('//localhost:8081/post', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ URL: formText })
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity;
                document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity;
                document.getElementById('text').innerHTML = "Text" + res.text;
                document.getElementById('polarity-confidence').innerHTML = "polarity-confidence: " + res.polarity_confidence;
                document.getElementById('subjectivity-confidence').innerHTML = "subjectivity-confidence: " + res.subjectivity_confidence;
            })
    } else {
        alert("The URL entered is not valid");
    }
}

export { handleSubmit }
