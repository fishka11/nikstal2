import CardWithIcon from "@/components/cardWithIcon";
import { daysOfWeekPl } from "@/lib/variables";
import { v4 as uuidv4 } from "uuid";
import GoogleMap from "@/components/googleMap";

const daysOfWeekToShortPl = (day) => {
  const pl = daysOfWeekPl.find(
    (item) => item.en.toLowerCase() === day.toLowerCase()
  );
  return pl.shortPl;
};

export default function Contact({ cards, firmData }) {
  const workingHours = firmData.workingHours.map((item) => {
    return {
      id: item.id,
      days:
        item.dayOfWeek.length > 1
          ? `${daysOfWeekToShortPl(
              item.dayOfWeek[0].toLowerCase()
            )} - ${daysOfWeekToShortPl(
              item.dayOfWeek[item.dayOfWeek.length - 1]
            )}`
          : daysOfWeekToShortPl(item.dayOfWeek[0]),
      hours: `${item.openingHour} - ${item.closingHour}`,
    };
  });

  return (
    <div className="mb-8">
      <div className="container flex max-w-screen-2xl flex-wrap justify-center">
        {cards.map((card) => {
          return (
            <CardWithIcon
              key={card?.id || uuidv4()}
              icon={card?.fontAwesomeIconName}
              title={card?.subtitle}
              texts={card?.texts}
            />
          );
        })}
      </div>
      <div className="container my-8 flex max-w-screen-xl flex-col items-center">
        <div className="text-center text-xl font-light">
          <p className="mb-2 font-bold">{firmData?.name}</p>
          <p>
            NIP: <span className="font-bold">{firmData?.nip}</span>
          </p>
          <p>
            REGON: <span className="font-bold">{firmData?.regon}</span>
          </p>
          <p>
            Nr BDO: <span className="font-bold">{firmData?.bdo}</span>
          </p>
        </div>
      </div>
      <div className="container mb-4 mt-8 flex max-w-screen-xl flex-col items-center">
        <h2 className="text-2xl font-light text-blue-800">Godziny otwarcia</h2>
      </div>
      <div className="container mb-8 flex max-w-screen-xl flex-col items-center">
        {workingHours.map((item) => {
          return (
            <p className="text-xl font-light" key={item.id}>
              {item.days}: <span className="font-bold">{item.hours}</span>
            </p>
          );
        })}
      </div>
      <div className="">
        <GoogleMap />
      </div>
    </div>
  );
}
