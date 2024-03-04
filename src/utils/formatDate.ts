export function formatDate(date: string){
    const dateObject = new Date(date);
    return `${dateObject.getDate()}.${dateObject.getMonth() + 1}.${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject.getMinutes()}:${dateObject.getSeconds()}`;
}