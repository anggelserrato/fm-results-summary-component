import Image from 'next/image';
import dataJson from './data/data.json';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:bg-blue-50">
      <section className="flex w-full max-w-md flex-col gap-300 md:mt-[284px] md:grid md:max-w-[686px] md:grid-cols-2 md:gap-0 md:rounded-4xl md:bg-white">
        <div className="flex w-full flex-col items-center gap-300 rounded-b-4xl bg-linear-to-b from-gradient-2-start to-gradient-2-end px-14.25 py-400 shadow-card md:gap-400 md:rounded-4xl md:px-[69px] md:py-[45px]">
          <p className="text-preset-5-bold text-navy-200">Your Result</p>
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-full bg-linear-to-b from-gradient-1-start to-gradient-1-end/1 md:h-50 md:w-50">
            <p className="text-preset-2 text-white">76</p>
            <p className="text-preset-6-bold text-navy-200 md:text-preset-5-bold">
              of 100
            </p>
          </div>
          <div className="flex flex-col items-center gap-100 text-center md:gap-200">
            <p className="text-preset-4 text-white md:text-preset-3">Great</p>
            <p className="text-preset-6-medium text-navy-200 md:text-preset-5-medium">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-300 px-400 md:gap-400 md:px-[40px] md:py-[45px]">
          <p className="text-preset-5-bold text-navy-950">Summary</p>
          <div className="flex flex-col">
            <div className="flex flex-col gap-200">
              {dataJson.map((item) => (
                <div key={item.score}>
                  <div
                    className={`flex flex-row rounded-xl ${item['bg-color']} p-200`}
                  >
                    <Image
                      src={item.icon}
                      alt={`Icon of the ${item.category}`}
                      width={20}
                      height={20}
                    />
                    <p
                      className={`mr-auto text-preset-6-medium ${item.color} ml-200`}
                    >
                      {item.category}
                    </p>
                    <p className="items-end text-preset-6-bold text-navy-950">
                      {item.score}{' '}
                      <span className="text-navy-950 opacity-[0.5]">/ 100</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="w-full rounded-full bg-navy-950 from-gradient-2-start to-gradient-2-end py-4 text-preset-5-bold text-white hover:bg-linear-to-b md:text-[1.125rem]">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
