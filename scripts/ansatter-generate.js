// Importering av JS
import AnsattModule from './AnsattModule.js'

const ansatterSection = document.querySelector("#ansatter-section");
// Oppsett av hvordan cardsa skal se ut i HTML-filen 
let htmlTxt = "";
AnsattModule.getAllAnsatter().forEach( ansatt => { 
    htmlTxt += `
        <article class="column is-3 is-multiline">
            <div class="card">
                <section class="card-image">
                        <img src="images/${ ansatt.image }">
                </section>
                <section class="card-content">
                    <h3><strong>${ansatt.title }</strong></h3>
                    <h3>${ansatt.navn}</h3>
                    <h3><li>${ansatt.alder}</li></h3>
                    <h3><li>${ansatt.ID}</li></h3>
                    <h3><strong>Kontaktinformasjon:</strong></h3>
                    <h4>${ansatt.mail}</h4>
                </section>
            </div>
        </article>
    `;
} );

ansatterSection.innerHTML = htmlTxt;




