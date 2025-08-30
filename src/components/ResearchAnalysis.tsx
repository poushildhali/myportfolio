import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// Dummy rPPG signal data
const generateSignal = (type: "real" | "fake") => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    const t = i / 30;
    let value =
      type === "real"
        ? Math.sin(2 * Math.PI * 1.2 * t) + 0.1 * Math.random()
        : 0.3 * Math.random();
    data.push({ t: t.toFixed(2), value });
  }
  return data;
};

//const PYTHON_GITHUB_URL = 'https://github.com/your-username/rppg-demo';

const ResearchAnalysis: React.FC = () => {
  const [signalType, setSignalType] = useState<"real" | "fake">("real");
  const [signalData, setSignalData] = useState(generateSignal("real"));

  const handleGenerate = (type: "real" | "fake") => {
    setSignalType(type);
    setSignalData(generateSignal(type));
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold text-center">rPPG Research Analysis</h1>
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        This demo simulates how rPPG signals differ between <b>real</b> and <b>AI-generated</b> faces.
        Real signals show periodic oscillations corresponding to heart rate, while synthetic signals
        appear as random noise.
      </p>

      <div className="flex justify-center gap-4">
        <Button onClick={() => handleGenerate("real")} variant="default">Generate Real Signal</Button>
        <Button onClick={() => handleGenerate("fake")} variant="destructive">Generate Fake Signal</Button>
      </div>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-center capitalize">
            {signalType} rPPG Signal
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={signalData}>
              <Line type="monotone" dataKey="value" stroke="#2563eb" dot={false} />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="t" label={{ value: "Time (s)", position: "insideBottom", dy: 10 }} />
              <YAxis label={{ value: "Amplitude", angle: -90, position: "insideLeft" }} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-4 space-y-3">
          <h2 className="text-lg font-semibold mb-2">Analysis</h2>
          {signalType === "real" ? (
            <p>
              The signal shows clear periodic oscillations (~1–2 Hz), representing physiological
              heart rate. This indicates a <b>real</b> video.
            </p>
          ) : (
            <p>
              The signal is mostly random noise without periodicity, suggesting the absence of
              physiological cues. This indicates a <b>synthetic</b> or AI-generated video.
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

      <Card className="shadow-lg rounded-2xl">
        <CardContent className="p-4 space-y-3">
          <h2 className="text-lg font-semibold mb-2">Python Demo (GitHub)</h2>
          <p className="text-sm text-gray-600">A runnable Python script that simulates rPPG signals and runs a classifier. Replace the placeholder repo URL with your actual repository.</p>
          <div className="flex gap-2 mt-2">
            <Button asChild>
              <a
                href="https://github.com/poushildhali/rPPG-analysis"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Python Demo on GitHub
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

export default ResearchAnalysis;
