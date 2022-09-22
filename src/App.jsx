import "./App.css";

import Navbar from "./components/navbar/navbar";
import Navitem from "./components/navbar/navitem";
import Dropdown from "./components/navbar/dropdown";
import { SiAboutdotme } from "react-icons/si";
import { BiMessageDetail } from "react-icons/bi";
import { FaBolt } from "react-icons/fa";

import Intro from "./pages/intro";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Navitem icon={<SiAboutdotme />} />
        <Navitem icon={<FaBolt />}>
          <Dropdown />
        </Navitem>
        <Navitem icon={<BiMessageDetail />} />
      </Navbar>
      <Intro />
      <Projects />
      <div className="Form">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sunt
          esse eum. Similique facilis ea fuga, numquam id, culpa accusantium
          quod adipisci molestias nulla, quidem est. Dignissimos officia
          veritatis eaque?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, commodi sed quod doloribus impedit facere, iste
          expedita doloremque, vitae ex laborum tempora. Asperiores minima
          ratione voluptas non quibusdam deserunt eveniet ullam, esse expedita,
          dolor pariatur! Neque in sequi rerum suscipit non officiis quis ullam!
          Nemo a pariatur commodi unde, eum nam, alias magni temporibus
          doloremque corrupti quos neque quasi veniam aliquid quo. Quisquam
          alias eum nobis delectus rerum ex necessitatibus incidunt facilis
          ipsum temporibus beatae illum nisi natus quam nostrum inventore
          voluptatem mollitia cupiditate dicta maxime, ea iusto aut. Deleniti
          eum porro ipsum sunt, commodi molestiae optio cumque numquam natus aut
          quibusdam, dolorem harum repellendus vero et assumenda sint unde in
          amet. Autem, reiciendis perspiciatis! At animi perspiciatis sunt
          mollitia quibusdam inventore commodi, consectetur accusantium ullam!
          Vero, sapiente aliquam. Repellat repellendus sunt consequuntur
          laboriosam officiis in ab nulla excepturi neque unde atque eaque vitae
          enim quidem, quod maiores at temporibus dignissimos dolores veniam
          eum! Numquam aliquid, porro, recusandae saepe dolore similique placeat
          ex dolor facere suscipit veritatis, voluptates consequatur ipsam cum
          distinctio dolores nesciunt obcaecati labore reiciendis corporis.
          Excepturi explicabo odit facilis! Consequatur veritatis obcaecati vel
          soluta, doloribus id sapiente, architecto maiores incidunt quia cumque
          dignissimos porro pariatur praesentium voluptas placeat a quibusdam!
          Numquam dolorem nesciunt voluptas nihil sed repellat inventore, nemo
          quae dolore alias officia perspiciatis voluptatem ipsum aperiam animi
          beatae aliquam autem, expedita atque fuga dolor dolorum. Tenetur quam
          iste vero architecto non. Quod totam eligendi, a cumque doloribus
          officiis exercitationem delectus beatae? Nisi debitis tempora
          reprehenderit quos recusandae in qui quis totam enim odio deleniti
          voluptatem accusantium minima temporibus inventore, pariatur quaerat
          esse aperiam. Itaque quidem perferendis vitae debitis ducimus quasi
          nesciunt neque reiciendis quia aperiam. Illum atque eaque itaque
          voluptas voluptatem alias, aliquam nemo culpa reprehenderit
          voluptatibus dolores libero excepturi, sequi iusto ea error. Ut
          repellendus reprehenderit odit. Magni, corrupti adipisci labore facere
          possimus, illo harum at consequatur repellendus inventore, unde
          distinctio deserunt ullam soluta tempore provident tempora officiis
          repellat id nostrum consectetur exercitationem aut dolorum officia?
          Cupiditate magni mollitia in corporis adipisci aliquam nesciunt
          doloremque neque laboriosam nam perspiciatis asperiores tempora eum
          quibusdam facere est enim rem, harum natus perferendis. Culpa
          accusantium minus in sapiente quasi earum amet, facilis nemo eius
          laudantium error eligendi praesentium! Repellendus temporibus nisi
          dolorem pariatur labore perferendis placeat, sit atque autem
          voluptates at accusamus doloribus distinctio sed perspiciatis
          exercitationem eligendi cum saepe? Adipisci, atque aliquam! Suscipit
          enim saepe molestiae perspiciatis ad id sapiente aspernatur excepturi.
          Amet praesentium eaque, non animi veritatis ea consequatur repudiandae
          placeat, neque corporis qui tempora quidem aspernatur soluta pariatur
          laudantium quos id nam voluptatum odit delectus earum? Architecto illo
          qui fugit, corrupti autem veniam voluptas deleniti accusantium
          nesciunt consectetur, ullam eaque velit provident sit maiores
          molestias nemo ex? Voluptates pariatur facilis iure dolorum ab sit
          consectetur distinctio ad molestiae omnis, necessitatibus quo autem
          eaque quos fugiat aliquid unde laboriosam, expedita ea asperiores nisi
          voluptate! Suscipit ipsum similique officiis porro sint sapiente
          provident sequi iste deleniti. Sequi ex similique quo beatae
          quibusdam, nostrum minima, blanditiis expedita quidem recusandae
          corporis, soluta inventore impedit eius sed. Eligendi, consequatur
          ipsam! Nemo, repudiandae! Modi maiores tempora sequi quis tenetur
          voluptatibus sed molestiae? Officiis quidem quia nulla quo architecto
          ea dicta eligendi natus, aliquid voluptates eos consequuntur atque
          ducimus quaerat id deleniti fugit neque, harum est. Libero dicta
          deleniti delectus repellendus. Omnis quia accusantium velit sit vitae
          suscipit adipisci, modi laborum debitis ratione? Tempora facere iure
          neque corporis voluptas explicabo consequatur delectus suscipit
          maiores esse, commodi sunt, dolor velit eos, tenetur odit porro
          necessitatibus accusamus minus odio quas exercitationem? Repellendus,
          voluptatibus unde a perferendis vel animi tempore natus recusandae
          ratione, maiores amet accusantium ducimus id nulla sapiente qui
          provident sequi sed delectus omnis minus adipisci fugiat. Voluptates
          non saepe dolore quisquam aliquid deserunt sequi et amet. Quaerat
          quibusdam sint, veniam recusandae nostrum culpa beatae ullam obcaecati
          aut. Commodi facilis necessitatibus maiores quaerat veritatis
          delectus, quos natus corrupti suscipit esse cumque eos doloribus qui,
          voluptatem magni mollitia illo velit aliquam, fugit rerum consectetur
          reprehenderit? Rerum corporis, vel adipisci, maiores accusantium
          ipsum, quisquam a optio est impedit necessitatibus id repellendus
          nobis dolorum. Iusto voluptate soluta quos dolores incidunt at earum
          tempore nam vel explicabo sed amet laborum fugit neque totam eligendi
          quaerat adipisci voluptates, labore similique consequatur. Vero sunt
          omnis maxime consequatur reiciendis iure facilis ullam laboriosam eius
          vel odit cum rem consequuntur nam aperiam hic inventore repellendus,
          dolor beatae cumque, eum officiis sed aliquam! Porro numquam, est ab
          dolore modi iure possimus debitis molestias optio ipsum expedita?
          Debitis distinctio, voluptatem numquam aliquid vitae alias sit placeat
          ipsa perspiciatis nemo iure natus repudiandae magnam dolore temporibus
          nam, ut quae fuga, iste amet. Sint vel facilis, fugit eius minus
          explicabo dolor suscipit provident animi ut unde laborum eveniet iste
          possimus vero? Earum, doloribus? Repellat, possimus dicta. Beatae
          facere consequatur unde, aut, id ratione nostrum inventore, delectus
          veritatis architecto cupiditate repellat rerum quidem omnis quia illo!
          Praesentium incidunt perferendis magni ad blanditiis, minima eveniet
          dolorum deserunt officia asperiores minus tenetur iste sit distinctio
          molestias nam? Repellendus nam, quia id eum animi in officia sapiente
          recusandae ab minus ad quo, molestiae consequatur quibusdam dolorem
          neque, vel porro. Magnam odit quasi omnis minus recusandae voluptas
          expedita assumenda deleniti! Magni rem, quos assumenda excepturi eum
          laborum et quod, porro reiciendis animi itaque sit a fugiat molestiae
          natus officia nobis! Dolore nisi aliquid sed, harum maxime accusantium
          tempore, veniam culpa iure, ea illo praesentium. Sint, veritatis,
          repellendus doloremque dolorum sed perferendis ut mollitia ullam
          consequatur placeat sit animi similique ratione deserunt blanditiis?
          Animi esse quas laborum minus harum labore dolorem aliquid laboriosam
          iusto in, recusandae eos adipisci vero consectetur maxime ipsum. Eum
          eius voluptatem minus dolor libero? Libero pariatur eos molestias
          vitae id nemo error, hic animi ratione sequi maiores optio? Fuga
          tempora optio, unde ipsam animi, enim quisquam asperiores voluptates
          est porro laborum temporibus blanditiis ut inventore expedita,
          repellendus consequatur ab nobis eveniet aut? Impedit corrupti in
          pariatur enim hic, ut quos, nemo ex alias commodi architecto cumque,
          magnam quisquam tempore neque ipsum? Culpa molestias enim consequatur
          dolorem architecto!
        </p>
      </div>
    </div>
  );
}

export default App;
