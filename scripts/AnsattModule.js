// Umiddelbart påkalt funksjon som skal gi navn, tittel etc til lederne i HTML ansattsiden.
const AnsattModule = ( function(){ 
    const ansatter = [
        
        { title: "Dagligleder (Sinsen)", navn: "Jesper larsen", alder: "Alder: 19", ID: "AnsattID: 007", mail: "Jesplars@gyldne.no", image: "person3.jpg" },
        { title: "Dagligleder (Aker Brygge)", navn: "Tannfe Olsenbanden", alder: "Alder: 56", ID: "AnsattID: 46521", mail: "Tannband@gyldne.no", image: "person6.jpg" },
        { title: "Daglig leder", navn: "Hagen Parken", alder: "Alder: 22", ID: "AnsattID: 6544", mail: "parkhagen@gyldne.no", image: "person5.jpg" },
        { title: "Dagligleder (Løkka)", navn: "Cola Pedersen", alder: "Alder: 78", ID: "AnsattID: 14562", mail: "cokeped@gmail.com", image: "person7.jpg" }
    ];

    const getAllAnsatter = () => ansatter;

    return { getAllAnsatter } 

}() ); // slutten på de ansatte 

//eksporter de ansatte

export default AnsattModule;
