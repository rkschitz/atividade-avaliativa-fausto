export async function fetchData() {
     const response = await fetch('https://rxnav.nlm.nih.gov/REST/allconcepts.json?tty=BN+BPCK'); 
     const data = await response.json(); return data;
}