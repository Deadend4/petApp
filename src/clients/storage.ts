import { ref, FirebaseStorage, uploadBytesResumable, getDownloadURL, UploadTask, UploadTaskSnapshot} from "firebase/storage";

export default class Firestorage {
    constructor(storage: FirebaseStorage ) {
      this.storage = storage;
    }
    private storage: FirebaseStorage;
    uploadFile = async (file: File): Promise<UploadTask> => {
      const metadata = {
        contentType: 'image/jpeg'
      };
      const storageRef = ref(this.storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);      
      return uploadTask;
    };
    getURL = async (uploadTaskSnapshot: UploadTaskSnapshot): Promise<string> => {
      return await getDownloadURL(uploadTaskSnapshot.ref);
    }
  }