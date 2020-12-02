
const main = document.getElementById('main')

let aboutUs = `
  <div class="About_Us">
    <h3>ABOUT US</h3>
    <p>
      Ajax Investment Partners aligns financial and intellectual capital, strategic relationships and transformational growth
      strategies with financial services businesses that have a unique vision for creative disruption that drives platform,
      value, and scale.
    </p>
    <p>
      We are an incubator of early-stage companies, a growth accelerator for firms hitting their stride and a strategic
      partner for mature  enterprises seeking fresh investment  and new initiatives to  fuel  growth.
    </p>
    <p>
      From providing seed capital for new ventures, to facilitating growth equity investment transactions, to identifying new avenues for profitable expansion, 
      Ajax Investment Partners combines a passion for the transformative power of financial services, with a commitment to driving value for our portfolio companies, our strategic partners and our clients.
    </p>
  </div>
`
render()

function render(){
  main.innerHTML = aboutUs
}

