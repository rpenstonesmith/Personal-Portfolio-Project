class CssPropControl {
    constructor(element) {
      this.element = element
    }
    get(varName) {
      return getComputedStyle(this.element).getPropertyValue(varName)
    }
    set(varName, val) {
      return this.element.style.setProperty(varName, val)
    }
  }
  
  const bodyCssProps = new CssPropControl(document.body)
  
  let toggle = document.querySelector('#dark-mode-toggle')
  toggle.addEventListener('click', () => { 
    let mode = toggle.checked ? 'light' : 'dark'
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`))
    bodyCssProps.set('--background2', bodyCssProps.get(`--${mode}-background2`))
    bodyCssProps.set('--background3', bodyCssProps.get(`--${mode}-background3`))
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`))
    bodyCssProps.set('--primary2', bodyCssProps.get(`--${mode}-primary2`))
    bodyCssProps.set('--green', bodyCssProps.get(`--${mode}-green`))
    bodyCssProps.set('--white', bodyCssProps.get(`--${mode}-white`))
  })