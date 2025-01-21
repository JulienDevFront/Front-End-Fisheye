export class Media {
    constructor({ id, photographerId, title, likes, date, price }) {
        this.id = id;
        this.photographerId = photographerId;
        this.title = title;
        this.likes = likes;
        this.date = date;
        this.price = price;
    }

    getCard() {
        return null;
    }
}
