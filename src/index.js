
const main = document.getElementById('main')

let aboutUs = `
  <div class="about" id="about">
    <br/>
    <br/>
    <h4>ABOUT US</h4>
    <p>
      Ajax Investment Partners aligns <b>financial and intellectual capital, strategic relationships and transformational growth
      strategies</b> with financial services businesses that have a unique vision for creative disruption that drives platform,
      value, and scale.
    </p>
    <span class="blueLine"></span>
    <p>
      We are an <b>incubator</b> of early-stage companies, a <b>growth accelerator</b> for firms hitting their stride and a <b>strategic
      partner</b> for mature  enterprises seeking fresh investment  and new initiatives to  fuel  growth.
    </p>
    <span class="blueLine"></span>
    <p>
      From providing seed capital for new ventures, to facilitating growth equity investment transactions, to identify-
      <br/>
      ing new avenues for profitable expansion, Ajax Investment Partners combines a passion for the <b>transformative
      <br/>
      power of financial services</b>, with a <b>commitment to driving value</b> for our portfolio companies, our strategic 
      <br/>
      partners and our clients.
    </p>
  </div>
`

let capabilities = `
  <div class="capabilities" id="capabilities">
    <h4>CAPABILITIES</h4>
    
    <p>
      We create significant and long-term value for wealth management businesses by bringing
      <br/>
      together the right capital structure with the right strategic plan.
    </p>
    <span class="blackLine"></span>
    <p>
      Through our seasoned internal team and in collaboration with long standing strategic partners, 
      <br/>
      our capabilities encompass:
      <ul>
        <li>Venture capital investments for early-stage wealth management stat-ups</li>
        <li>Business incubator solutions for fin-tech companies </li>
        <li>Growth and customer acquisition strategy </li>
        <li>Strategic planning and execution support </li>
        <li>M&A advisory and private capital raising transactions </li>
        <li>Board advisory services</li>
      </ul>
      <br/>
    </p>

  </div>
`
let bottomPhoto= `
  <img src="images/Ajax Website Bottom Image.jpg" />
`

render()

function render(){
  main.innerHTML += aboutUs
  main.innerHTML += capabilities
  main.innerHTML += bottomPhoto
}

