export default class Area{
    constructor(){
        this.rootElement = searchInput.createRootElement();
    }
    
 
  async init(elementQuery) {
   
    this.finder = new Finder({ parentElement: this.renderElement });
    this.imageViewer = new ImageViewer({ parentElement: this.renderElement });
    this.loading = new Loading();
    this.bindEvents();
    await this.fetchFinder();
  }
    static createRootElement(){
        const searchWrapper = document.createElement('DIV');
        searchWrapper.classList.add("search-input");
        const searchInput = document.createElement('INPUT');
        searchWrapper.append(searchInput);
        
        const inputBtn = document.createElement('BUTTON');
        inputBtn.classList.add('search-btn');
        searchWrapper.append(inputBtn);
        return searchWrapper;
    }
    bindEvents(){
        
    }
    render(){
        return this.rootElement;
    }

}