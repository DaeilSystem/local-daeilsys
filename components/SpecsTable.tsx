'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const MODELS = ['DVIA-ULF350', 'DVIA-ULF700', 'DVIA-ULF1000', 'DVIA-ULF1500'] as const;
type ModelKey = typeof MODELS[number];

type Row =
  | { type: 'spec'; label: string; values: Record<ModelKey, string> }
  | { type: 'separator' };

const ROWS: Row[] = [
  { type: 'spec', label: 'Isolator Quantity', values: { 'DVIA-ULF350': '2 EA', 'DVIA-ULF700': '2 EA', 'DVIA-ULF1000': '2 EA', 'DVIA-ULF1500': '2 EA' } },
  {
    type: 'spec',
    label: 'Dimensions (W* × D* × H)',
    values: {
      'DVIA-ULF350': `S: 690–750 × 200 × 91 mm\nM: 750–810 × 200 × 91 mm\nL: 810–870 × 200 × 91 mm`,
      'DVIA-ULF700': `S: 690–750 × 240 × 91 mm\nM: 750–810 × 240 × 91 mm\nL: 810–870 × 240 × 91 mm`,
      'DVIA-ULF1000': `S: 730–790 × 270 × 91 mm\nM: 790–850 × 240 × 91 mm\nL: 850–910 × 240 × 91 mm`,
      'DVIA-ULF1500': `S: 730–790 × 270 × 91 mm\nM: 790–850 × 240 × 91 mm\nL: 850–910 × 240 × 91 mm`,
    },
  },
  { type: 'separator' },
  { type: 'spec', label: 'Maximum Load Capacity*', values: { 'DVIA-ULF350': '350 kg', 'DVIA-ULF700': '900 kg', 'DVIA-ULF1000': '1200 kg', 'DVIA-ULF1500': '1500 kg' } },
  { type: 'spec', label: 'Vibration Isolation Technology', values: { 'DVIA-ULF350': 'Feedback and Feedforward Control', 'DVIA-ULF700': 'Feedback and Feedforward Control', 'DVIA-ULF1000': 'Feedback and Feedforward Control', 'DVIA-ULF1500': 'Feedback and Feedforward Control' } },
  { type: 'spec', label: 'Degrees of Freedom', values: { 'DVIA-ULF350': '6 DOF', 'DVIA-ULF700': '6 DOF', 'DVIA-ULF1000': '6 DOF', 'DVIA-ULF1500': '6 DOF' } },
  { type: 'spec', label: 'Active Isolation Bandwidth', values: { 'DVIA-ULF350': '0.1 – 200 Hz', 'DVIA-ULF700': '0.1 – 200 Hz', 'DVIA-ULF1000': '0.1 – 200 Hz', 'DVIA-ULF1500': '0.1 – 200 Hz' } },
  { type: 'spec', label: 'Vibration Isolation', values: { 'DVIA-ULF350': '70 – 90% at 1 Hz, 90 – 99% at 2 Hz', 'DVIA-ULF700': '70 – 90% at 1 Hz, 90 – 99% at 2 Hz', 'DVIA-ULF1000': '70 – 90% at 1 Hz, 90 – 99% at 2 Hz', 'DVIA-ULF1500': '70 – 90% at 1 Hz, 90 – 99% at 2 Hz' } },
  { type: 'spec', label: 'Actuator', values: { 'DVIA-ULF350': 'Electromagnetic Actuator', 'DVIA-ULF700': 'Electromagnetic Actuator', 'DVIA-ULF1000': 'Electromagnetic Actuator', 'DVIA-ULF1500': 'Electromagnetic Actuator' } },
  {
    type: 'spec',
    label: 'Maximum Actuator Force',
    values: {
      'DVIA-ULF350': `Vertical: 40 N\nHorizontal: 40 N`,
      'DVIA-ULF700': `Vertical: 80 N\nHorizontal: 80 N`,
      'DVIA-ULF1000': `Vertical: 80 N\nHorizontal: 114 N`,
      'DVIA-ULF1500': `Vertical: 80 N\nHorizontal: 114 N`,
    },
  },
  { type: 'separator' },
  { type: 'spec', label: 'Vibration Sensor', values: { 'DVIA-ULF350': 'Velocity, Sensitivity: 100.4 V/m/s ± 10%', 'DVIA-ULF700': 'Velocity, Sensitivity: 100.4 V/m/s ± 10%', 'DVIA-ULF1000': 'Velocity, Sensitivity: 100.4 V/m/s ± 10%', 'DVIA-ULF1500': 'Velocity, Sensitivity: 100.4 V/m/s ± 10%' } },
  { type: 'spec', label: 'Response Time', values: { 'DVIA-ULF350': '< 0.5 ms', 'DVIA-ULF700': '< 0.5 ms', 'DVIA-ULF1000': '< 0.5 ms', 'DVIA-ULF1500': '< 0.5 ms' } },
  { type: 'spec', label: 'Magnetic Field', values: { 'DVIA-ULF350': '< 0.05 μT', 'DVIA-ULF700': '< 0.05 μT', 'DVIA-ULF1000': '< 0.05 μT', 'DVIA-ULF1500': '< 0.05 μT' } },
  { type: 'spec', label: 'Controller', values: { 'DVIA-ULF350': 'External', 'DVIA-ULF700': 'External', 'DVIA-ULF1000': 'External', 'DVIA-ULF1500': 'External' } },
  { type: 'spec', label: 'Compliance / Certifications', values: { 'DVIA-ULF350': 'CE, TÜV', 'DVIA-ULF700': 'CE, TÜV', 'DVIA-ULF1000': 'CE, TÜV', 'DVIA-ULF1500': 'CE, TÜV' } },
  { type: 'spec', label: 'Power Requirements', values: { 'DVIA-ULF350': '100–240 V AC, 50/60 Hz', 'DVIA-ULF700': '100–240 V AC, 50/60 Hz', 'DVIA-ULF1000': '100–240 V AC, 50/60 Hz', 'DVIA-ULF1500': '100–240 V AC, 50/60 Hz' } },
  { type: 'spec', label: 'Environmental Requirements', values: { 'DVIA-ULF350': 'Temperature: 5–50 °C, Humidity: 20–90 %', 'DVIA-ULF700': 'Temperature: 5–50 °C, Humidity: 20–90 %', 'DVIA-ULF1000': 'Temperature: 5–50 °C, Humidity: 20–90 %', 'DVIA-ULF1500': 'Temperature: 5–50 °C, Humidity: 20–90 %' } },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.('change', onChange);
    return () => m.removeEventListener?.('change', onChange);
  }, [query]);
  return matches;
}

function renderMergedValues(label: string, values: Record<ModelKey, string>) {
  const exceptionLabels = ['Dimensions (W* × D* × H)', 'Maximum Actuator Force'];
  if (exceptionLabels.includes(label)) {
    return MODELS.map((m) => ({ content: values[m], colSpan: 1, align: 'left' as const }));
  }
  const arr = MODELS.map((m) => values[m]);
  const merged: { content: string; colSpan: number; align: 'left' | 'center' }[] = [];
  let i = 0;
  while (i < arr.length) {
    const val = arr[i];
    let j = i + 1;
    while (j < arr.length && arr[j] === val) j++;
    merged.push({ content: val, colSpan: j - i, align: j - i > 1 ? 'center' : 'left' });
    i = j;
  }
  return merged;
}

export default function ResponsiveSpecsInteractive() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [active, setActive] = useState<ModelKey>('DVIA-ULF350');

  const [mode, setMode] = useState<'all' | 'focus'>('all');
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!hasInteracted.current) {
      setMode(isDesktop ? 'all' : 'focus');
    }
  }, [isDesktop]);

  return (
    <div className="w-full max-w-[1160px] mx-auto my-12 px-4 font-sans">
      {/* 모드 토글 (데스크탑 전용) */}
      {isDesktop && (
        <div className="flex justify-end mb-4">
          <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1">
            {(['all','focus'] as const).map((m) => (
              <button
                key={m}
                onClick={() => {
                  hasInteracted.current = true;
                  setMode(m);
                }}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                  mode === m ? 'bg-white text-black font-semibold shadow-sm' : 'text-white/70 hover:text-white'
                }`}
              >
                {m.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 모델 선택 탭 */}
      {(!isDesktop || mode === 'focus') && (
        <div className="mb-4">
          <div
            className={`
              flex gap-2 px-1 py-2 scroll-smooth snap-x
              ${isDesktop ? 'justify-center' : 'overflow-x-auto scrollbar-hide'}
            `}
          >
            {MODELS.map((m) => (
              <button
                key={m}
                onClick={() => setActive(m)}
                className={`snap-start px-3 py-2 text-xs sm:text-sm rounded-full border transition-all whitespace-nowrap ${
                  active === m
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'border-white/20 text-white/70 hover:text-white'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ALL 모드 */}
      {isDesktop && mode === 'all' ? (
        <div className="overflow-x-auto rounded-2xl">
          <table className="min-w-[880px] w-full text-sm table-fixed">
            <colgroup>
              <col className="w-[200px]" />
              {MODELS.map((m) => <col key={m} />)}
            </colgroup>
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 font-medium text-neutral-400">Model</th>
                {MODELS.map((m) => (
                  <th key={m} className="py-4 px-4 text-left font-semibold text-white">{m}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, idx) =>
                row.type === 'separator' ? (
                  <tr key={`sep-${idx}`}><td colSpan={5} className="py-2"><hr className="border-white/10" /></td></tr>
                ) : (
                  <tr key={`${row.label}-${idx}`} className="align-top">
                    <th className="text-left py-3 px-4 font-normal text-neutral-400">{row.label}</th>
                    {renderMergedValues(row.label, row.values).map((cell, i) => (
                      <td
                        key={i}
                        colSpan={cell.colSpan}
                        className={`py-3 px-4 whitespace-pre-line leading-relaxed ${
                          cell.align === 'center'
                            ? 'text-center font-semibold text-white'
                            : 'text-left text-white/90'
                        }`}
                      >
                        {cell.content}
                      </td>
                    ))}
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="px-4 py-3 text-xs text-neutral-300 italic">
            <p><span className="text-yellow-300 font-semibold">*</span> Maximum load capacity can be increased as adding the isolators.</p>
            <p><span className="text-yellow-300 font-semibold">*</span> Width and depth can be customized based on SEM model or equipment specifications.</p>
          </div>
        </div>
      ) : (
        // FOCUS 모드
        <AnimatePresence mode="wait">
          <div className="flex justify-center">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-[720px] rounded-2xl p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-white text-center">
                {active} Specifications
              </h3>
              <dl className="divide-y divide-white/10 text-xs sm:text-sm">
                {ROWS.map((row, i) =>
                  row.type === 'separator' ? (
                    <div key={`sep-${i}`} className="py-1" />
                  ) : (
                    <div key={`f-${row.label}-${i}`} className="py-3 grid gap-2 sm:grid-cols-[12rem,1fr] sm:gap-6">
                      <dt className="text-white/50">{row.label}</dt>
                      <dd className="text-white font-medium whitespace-pre-line leading-relaxed">
                        {row.values[active]}
                      </dd>
                    </div>
                  )
                )}
              </dl>
              <div className="mt-4 text-xs text-neutral-300 italic text-center">
                <p><span className="text-yellow-300 font-semibold">*</span> Maximum load capacity can be increased as adding the isolators.</p>
                <p><span className="text-yellow-300 font-semibold">*</span> Width and depth can be customized based on SEM model or equipment specifications.</p>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
