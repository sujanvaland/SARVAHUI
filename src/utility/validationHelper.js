function extractFacebookURLs(text) {
    
    const regex = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9.]+\/?$/;
    const urls = text?.match(regex);
    return urls ? urls[0] : "";
}

function extractLinkedinURLs(text) {
    
    const regex = /^(https?:\/\/)?(www\.)?linkedin.com\/(in|company)\/[a-zA-Z0-9-]+\/?$/;
    const urls = text?.match(regex);
    return urls ? urls[0] : "";
}

export { extractFacebookURLs, extractLinkedinURLs };
