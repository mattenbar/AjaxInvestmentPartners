
const main = document.getElementById('main')

let aboutUs = `
  <div class="About_Us" id='About_Us'>
    <h3 style="text-align:center">ABOUT US</h3>
    <p>
      Ajax Investment Partners aligns financial and intellectual capital, strategic relationships and transformational growth
      <br/>
      strategies with financial services businesses that have a unique vision for creative disruption that drives platform,
      <br/>
      value, and scale.
    </p>
    <p>
      We are an incubator of early-stage companies, a growth accelerator for firms hitting their stride and a strategic
      <br/>
      partner for mature  enterprises seeking fresh investment  and new initiatives to  fuel  growth.
    </p>
    
    <p>
      From providing seed capital for new ventures, to facilitating growth equity investment transactions, to identify-
      <br/>
      ing new avenues for profitable expansion, Ajax Investment Partners combines a passion for the 
      <br/>
      transformative power of financial services, with a commitment to driving value for our portfolio companies, our strategic 
      <br/>
      partners and our clients.
    </p>
  </div>
`

let capabilitiesList = `
  <ul>
    <li>Venture capital investments for early-stage wealth management stat-ups</li>
    <li>Business incubator solutions for fin-tech companies </li>
    <li>Growth and customer acquisition strategy </li>
    <li>Strategic planning and execution support </li>
    <li>M&A advisory and private capital raising transactions </li>
    <li>Board advisory services</li>
  </ul>
`

let capabilities = `
  <div class="capabilities">
    <h3 style="text-align:center">CAPABILITIES</h3>
    
    <p>
      We create significant and long-term value for wealth management businesses by bringing
      <br/>
      together the right capital structure with the right strategic plan.
    </p>

    <p>
      Through our seasoned internal team and in collaboration with long standing strategic partners, 
      <br/>
      our capabilities encompass:
      ${capabilitiesList}
    </p>

  </div>
`
render()

function render(){
  main.innerHTML += aboutUs
  main.innerHTML += capabilities
}

