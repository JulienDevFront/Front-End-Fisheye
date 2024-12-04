export async function GetData(path, key) {
    try {
        const response = await fetch(`${path}`);
        const data = await response.json();
        return data[key];
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
}
