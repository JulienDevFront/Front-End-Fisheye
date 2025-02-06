/** JS.DOC =>
 * - - -
 * @module SingletonData @type {class}
 * - - -
 * @description A Singleton class  designed to store and  manage data
 * globally of API. Ensures only one instance exists, making it ideal
 * for  manipulate  the DOM as for  example  the  options sort  or an
 * architectur logic modulare.
 * - - -
 * @static @method loadData() load the datas
 * @static @method getApiGlobal() return API global
 * @static @method getPhotographers() return @key "photographers"
 * @static @method getmedia() return @key "media"
 */
export class SingletonData {
    constructor(data) {
        if (SingletonData.instance) return SingletonData.instance;
        if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("Data is not valid. The constructor of 'SingletonData' expects a non-null object and not an array.");

        this._data = data;
        SingletonData.instance = this;
    }

    static async loadData(path) {
        try {
            const promise = await fetch(path);
            const reponse = await promise.json();

            if (!promise.ok) throw new Error(`HTTP error status : ${promise.status}`);
            if (!reponse.photographers || !reponse.media) throw new Error("the data is not what expected");

            SingletonData.instance = new SingletonData(reponse);
            return SingletonData.instance;
        } catch (e) {
            console.error(e);
        }
    }

    static getApiGlobal() {
        if (!SingletonData.instance || !SingletonData.instance._data) throw new Error("SingletonData is not initialized yet.");
        return SingletonData.instance._data;
    }

    static getPhotographers() {
        if (!SingletonData.instance || !SingletonData.instance._data) throw new Error("SingletonData is not initialized yet.");
        if (!SingletonData.instance._data.photographers) throw new Error("The key 'photographers' does not exist or is not found.");
        return SingletonData.instance._data.photographers;
    }

    static getMedia() {
        if (!SingletonData.instance || !SingletonData.instance._data) throw new Error("SingletonData is not initialized yet.");
        if (!SingletonData.instance._data.media) throw new Error("The key 'media' does not exist or is not found.");
        return SingletonData.instance._data.media;
    }
}
