const logUploadedFile = (num, color = 'green') => {
    const message = `c%Uploaded ${num} files.`;
    const style = `color:${color};font-weight:bold;`;
    console.log(message, style)
};

export {
    logUploadedFile
}