import { ref, FirebaseStorage, uploadBytesResumable, getDownloadURL, UploadTask, UploadTaskSnapshot, deleteObject } from "firebase/storage";

export default class Firestorage {
    constructor(storage: FirebaseStorage ) {
      this.storage = storage;
    }
    private storage: FirebaseStorage;
    uploadFile = async (file: File, folder: string): Promise<UploadTask> => {
      const metadata = {
        contentType: 'image/jpeg'
      };
      const storageRef = ref(this.storage, `images/${folder}/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);      
      return uploadTask;
    };
    getURL = async (uploadTaskSnapshot: UploadTaskSnapshot): Promise<string> => {
      return await getDownloadURL(uploadTaskSnapshot.ref);
    }
    deleteFile = async (url: string) => {
      const storageRef = ref(this.storage, url);
      await deleteObject(storageRef);
    }
  }