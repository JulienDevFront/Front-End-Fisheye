import { ImageMedia } from "./imageMedia.js";
import { VideoMedia } from "./videoMedia.js";

export class factoryMedia {
    constructor(data) {
        if (data.image) {
            return new ImageMedia(data);
        } else if (data.video) {
            return new VideoMedia(data);
        } else {
            throw new Error("Factory media err !");
        }
    }
}
