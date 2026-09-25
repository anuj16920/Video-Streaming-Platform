import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { estimateStreamingCosts, type CalculatorInputs } from "@/lib/streamx-data";
import { Icon, Tag } from "./primitives";

export function CostCalculator() {
  const [inputs, setInputs] = useState<CalculatorInputs>({ viewers: 24000, hours: 3, duration: 18, videos: 380, uploads: 24, size: 1.2, quality: 1.05, cache: 88 });
  const estimate = useMemo(() => estimateStreamingCosts(inputs), [inputs]);
  const set = (field: keyof CalculatorInputs, value: number) => setInputs((current) => ({ ...current, [field]: value }));

  return (
    <div className="grid gap-8 rounded-lg border border-border/85 bg-card/45 p-5 panel-shadow md:grid-cols-[1.05fr_.95fr] md:p-7">
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="font-display text-base font-semibold">Model your monthly traffic</h3><p className="mt-1 text-[11px] text-muted-foreground">Adjust the inputs to match how your learners watch.</p></div><Tag><Icon name="SlidersHorizontal" className="size-3" />ESTIMATE</Tag></div>
        <NumericInput label="Monthly viewers" value={inputs.viewers} suffix="learners" onChange={(value) => set("viewers", value)} />
        <NumericInput label="Avg. watch time / learner" value={inputs.hours} suffix="hours" step="0.5" onChange={(value) => set("hours", value)} />
        <div className="grid grid-cols-2 gap-4"><NumericInput label="Video library" value={inputs.videos} suffix="videos" onChange={(value) => set("videos", value)} /><NumericInput label="Monthly uploads" value={inputs.uploads} suffix="new" onChange={(value) => set("uploads", value)} /></div>
        <div className="rounded-md border border-border/75 bg-background/35 px-4 py-3.5">
          <div className="mb-3 flex items-center justify-between gap-2"><label className="text-[11px] font-medium">Expected edge cache hit rate</label><span className="font-display text-sm font-semibold text-stream-cyan">{inputs.cache}%</span></div>
          <Slider value={[inputs.cache]} min={30} max={98} step={1} onValueChange={([value]) => { if (value !== undefined) set("cache", value); }} />
          <div className="mt-2 flex justify-between text-[9px] text-muted-foreground"><span>30% · Early rollout</span><span>98% · Mature library</span></div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between overflow-hidden rounded-md border border-primary/20 bg-background/60 p-5 sm:p-6">
        <div className="absolute right-0 top-0 size-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative">
          <Tag className="border-stream-cyan/20 text-stream-cyan"><Icon name="Activity" className="size-3" />DEMO ESTIMATE · INR</Tag>
          <h3 className="mt-4 font-display text-xl font-semibold">A leaner delivery model.</h3>
          <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">Illustrative pricing based on your inputs, not a provider quote.</p>
          <div className="mt-6 space-y-4">
            <EstimateRow title="Traditional setup" sub="Direct CDN + origin" value={`₹${formatMoney(estimate.legacyCost)}`} />
            <EstimateRow title="StreamX architecture" sub="Edge-first + efficient storage" value={`₹${formatMoney(estimate.optimizedCost)}`} primary />
            <div className="border-t border-border/75 pt-3">
              <div className="mb-2 flex items-center justify-between gap-2 text-[10px] text-muted-foreground"><span>Monthly delivery volume</span><span className="font-medium text-foreground">{formatVolume(estimate.monthlyGb)} GB</span></div>
              <div className="mb-2 flex items-center justify-between gap-2 text-[10px] text-muted-foreground"><span>Origin after caching</span><span className="font-medium text-foreground">{formatVolume(estimate.originGb)} GB</span></div>
              <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground"><span>Estimated stored assets</span><span className="font-medium text-foreground">{formatVolume(estimate.storedGb)} GB</span></div>
            </div>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-4 border-t border-border/70 pt-4">
          <span className="text-[10px] text-muted-foreground">Indicative model · INR · monthly</span>
          <span className="inline-flex items-center gap-1.5 rounded border border-stream-green/20 bg-stream-green/10 px-2 py-1 text-[10px] font-semibold text-stream-green"><Icon name="ArrowDownRight" className="size-3.5" />{Math.round(estimate.savingsPercent)}% lower</span>
        </div>
      </div>
    </div>
  );
}

function NumericInput({ label, value, suffix, step = "1", onChange }: { label: string; value: number; suffix: string; step?: number | string; onChange: (value: number) => void }) {
  return <label className="block"><span className="mb-1.5 block text-[10px] font-medium text-muted-foreground">{label}</span><span className="flex h-10 items-center rounded border border-input bg-background/40 px-3"><Input type="number" min={0} step={step} value={value} onChange={(event) => onChange(Math.max(0, Number(event.target.value) || 0))} className="h-full min-w-0 border-0 bg-transparent px-0 text-[12px] shadow-none focus-visible:ring-0" /><span className="shrink-0 text-[9px] text-muted-foreground">{suffix}</span></span></label>;
}

function EstimateRow({ title, sub, value, primary = false }: { title: string; sub: string; value: string; primary?: boolean }) {
  return <div className={`flex items-center justify-between gap-3 border-b border-border/55 pb-3 ${primary ? "opacity-100" : "opacity-75"}`}><div><p className={`text-[11px] font-medium ${primary ? "text-foreground" : "text-muted-foreground"}`}>{title}</p><p className="mt-0.5 text-[9px] text-muted-foreground">{sub}</p></div><span className={`font-display text-[15px] font-semibold tabular-nums ${primary ? "text-stream-cyan" : "text-muted-foreground"}`}>{value}</span></div>;
}

function formatMoney(value: number) { return Math.round(value).toLocaleString("en-IN"); }
function formatVolume(value: number) { return value >= 1000 ? (value / 1000).toFixed(1) + "k" : value.toFixed(0); }