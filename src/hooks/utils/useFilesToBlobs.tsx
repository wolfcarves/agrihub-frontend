const useFilesToBlobs = async (files: File[]): Promise<Blob[]> => {
  const blobArray: Blob[] = [];

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: file.type });
    blobArray.push(blob);
  }

  return blobArray;
};

export default useFilesToBlobs;
