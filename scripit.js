const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run:['01-01','01-02','01-06'],
    takePill:['01-03'],
    school:['01-02'],
    water:['01-04,01-05'],
    food:['01-07,01-08,01-09'],
}

nlwSetup.setData(data)
nlwSetup.load()