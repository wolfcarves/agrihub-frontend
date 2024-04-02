import BackButton from "@components/ui/custom/button/back-button";

const QuestionRulesCard = () => (
  <div className="flex flex-col px-0 lg:px-10">
    <BackButton className="mb-10" />
    <h2 className="font-poppins-bold text-foreground">Ask a public question</h2>

    <div className="mt-10 mb-20 w-full max-w-[60rem] p-7 rounded-md border border-primary bg-secondary">
      <div className="text-lg">
        Gabay sa pagsulat ng isang wastong katanungan
      </div>
      <p className="mt-3">
        Alam mo sa sarili mong ikaw ay handa na upang magtanong patungkol sa
        katanungan ukol sa pagsasaka at itong form na ito ay makakatulong sayo
        sa pagsasaayos ng iyong itatanong.
      </p>

      <div className="text-md font-poppins-bold mt-10">Mga pamamaraan</div>

      <div className="text-sm">
        <ul className="list-disc ps-4">
          <li className="my-3 ">
            Ilarawan ang iyong problema gamit ang mas maraming detalye.
          </li>
          <li className="my-3 ">
            Maglagay ng "tags" na makakatulong upang ang iyong katanungan ay
            agad na makita ng mga miyembro ng mga komunidad.
          </li>
          <li className="my-3 ">
            Suriin ang iyong tanong at i-post ito sa aming website
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default QuestionRulesCard;
