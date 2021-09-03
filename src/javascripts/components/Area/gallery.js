export default class Gallery{
    constructor(){
        this.rootElement = searchInput.createRootElement();
    }
    
    static createRootElement(){
        const galleryWrapper = document.createElement('DIV');
        galleryWrapper.classList.add("gallery");
        const images = document.createElement('DIV');
        images.classList.add("images");
        galleryWrapper.append(images);
        
        return galleryWrapper;
    }
    bindEvents(){
        
    }
    render(){
        return this.rootElement;
    }

}