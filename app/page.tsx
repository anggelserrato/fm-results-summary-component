import Image from 'next/image';
import dataJson from './data/data.json';

export default function Home() {
  return (
    <main className="m-auto flex min-h-screen flex-col items-center">
      <section className="flex w-full flex-col gap-300">
        <div className="flex flex-col items-center gap-300 rounded-b-4xl bg-blue-500 px-14.25 py-400 shadow-card">
          <p className="text-preset-5-bold text-navy-200">Your Result</p>
          <div className="flex h-35 w-35 flex-col items-center justify-center rounded-full bg-blue-400">
            <p className="text-preset-2 text-white">76</p>
            <p className="text-preset-6-bold text-navy-200">of 100</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-100">
            <p className="text-preset-4 text-white">Great</p>
            <p className="text-preset-6-medium text-navy-200">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-300 px-400">
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
          <button className="w-full rounded-full bg-navy-950 px-4 py-3 text-preset-5-bold text-white">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
