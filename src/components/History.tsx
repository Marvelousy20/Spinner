import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from "./footer";

interface RewardEntry {
  dateTime: string;
  amountSpent: number;
  rewardsWon: number;
}

export default function History() {
  const rewardsData: RewardEntry[] = [
    { dateTime: "11/30/2024 - 10:15 AM", amountSpent: 50, rewardsWon: 3 },
    { dateTime: "11/29/2024 - 08:47 PM", amountSpent: 10, rewardsWon: 31 },
    { dateTime: "11/28/2024 - 06:33 AM", amountSpent: 20, rewardsWon: 12 },
    { dateTime: "11/30/2024 - 10:15 AM", amountSpent: 30, rewardsWon: 11 },
    { dateTime: "11/30/2024 - 10:15 AM", amountSpent: 70, rewardsWon: 19 },
    { dateTime: "11/28/2024 - 06:33 AM", amountSpent: 80, rewardsWon: 30 },
    { dateTime: "11/30/2024 - 10:15 AM", amountSpent: 20, rewardsWon: 20 },
  ];
  return (
    <div className="flex flex-col items-center pt-12 min-h-screen w-full bg-[url('/layout.png')] bg-cover bg-center relative px-10">
      <div className="absolute inset-0 bg-overlay-gradient"></div>
      <section className="relative z-10 flex flex-col min-h-screen">
        <h3 className="bg-spinner-gradient text-center bg-clip-text text-transparent font-normal text-3xl font-krona">
          History
        </h3>

        <div className="mt-12">
          <Card className="w-full max-w-xl !bg-[#211814] !text-white font-krona">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold"></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full !text-[.55rem]">
                  <thead>
                    <tr className="border-b border-neutral-700">
                      <th className="px-4 py-3 text-left  font-medium text-[.65rem]">
                        <span className="bg-welcome-gradient bg-clip-text text-transparent">
                          Date &
                        </span>
                        <br />
                        <span className="bg-spinner-gradient bg-clip-text text-transparent">
                          Time
                        </span>
                      </th>
                      <th className="px-4 py-3 text-left font-medium">
                        <span className="bg-welcome-gradient bg-clip-text text-transparent">
                          Amount
                        </span>{" "}
                        <span className="bg-spinner-gradient bg-clip-text text-transparent">
                          Spent
                        </span>
                      </th>
                      <th className="px-4 py-3 text-left font-medium ">
                        <span className="bg-welcome-gradient bg-clip-text text-transparent">
                          Reward
                        </span>{" "}
                        <span className="bg-spinner-gradient bg-clip-text text-transparent">
                          Won
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[.65rem]">
                    {rewardsData.map((entry, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-800 hover:bg-neutral-800/50 transition-colors"
                      >
                        <td className="px-4 py-3">{entry.dateTime}</td>
                        <td className="px-4 py-3">
                          {entry.amountSpent} Tokens
                        </td>
                        <td className="px-4 py-3">{entry.rewardsWon} Tokens</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </section>
    </div>
  );
}
