import type { ComponentType, SVGProps } from "react";
import {
  Activity, ArrowDownRight, ArrowLeftRight, ArrowRight, ArrowUpRight, BarChart3,
  BookOpen, Boxes, Check, ChevronDown, CircleHelp, Cloud, Code2, Compass, Cpu,
  Database, Disc3, Download, Gauge, GraduationCap, HardDrive, Layers3, LockKeyhole,
  Menu, MonitorPlay, MoreHorizontal, Network, Play, Radio, Search, Server, Settings,
  ShieldCheck, SlidersHorizontal, Sparkles, Users, Video, X, Zap,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const icons = {
  Activity, ArrowDownRight, ArrowLeftRight, ArrowRight, ArrowUpRight, BarChart3,
  BookOpen, Boxes, Check, ChevronDown, CircleHelp, Cloud, Code2, Compass, Cpu,
  Database, Disc3, Download, Gauge, GraduationCap, HardDrive, Layers3, LockKeyhole,
  Menu, MonitorPlay, MoreHorizontal, Network, Play, Radio, Search, Server, Settings,
  ShieldCheck, SlidersHorizontal, Sparkles, Users, Video, X, Zap,
};

type IconName = keyof typeof icons;

export function Icon({ name, className, ...props }: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  const Component = icons[name] as ComponentType<SVGProps<SVGSVGElement>>;
  return <Component aria-hidden="true" className={className} {...props} />;
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="StreamX home" className="group flex items-center gap-2.5">
      <span className="relative grid size-8 place-items-center overflow-hidden rounded-md bg-primary shadow-lg shadow-primary/25">
        <span className="absolute -left-1 h-4 w-4 rounded-full bg-stream-cyan/80 blur-[7px]" />
        <svg aria-hidden="true" className="relative size-[18px]" viewBox="0 0 20 20" fill="none">
          <path d="M4 4.2 15.9 10 4 15.8V4.2Z" fill="currentColor" className="text-primary-foreground" />
          <path d="M7.2 7.1V12.9L13.2 10 7.2 7.1Z" fill="currentColor" className="text-stream-cyan" />
        </svg>
      </span>
      {!compact && <span className="font-display text-[17px] font-semibold tracking-[-.035em] text-foreground">stream<span className="text-primary-foreground">x</span></span>}
    </Link>
  );
}

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded border border-border/80 bg-secondary/50 px-2 py-1 text-[10px] font-medium tracking-[.04em] text-muted-foreground", className)}>{children}</span>;
}

export function SectionTitle({ eyebrow, title, detail, action }: { eyebrow?: string; title: string; detail?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div className="min-w-0">
        {eyebrow && <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[.13em] text-primary">{eyebrow}</p>}
        <h2 className="font-display text-[21px] font-semibold leading-tight text-foreground">{title}</h2>
        {detail && <p className="mt-1.5 max-w-xl text-[13px] leading-5 text-muted-foreground">{detail}</p>}
      </div>
      {action}
    </div>
  );
}

export function MetricTile({ label, value, change, icon, hint, accent = "blue" }: { label: string; value: string; change?: string; icon: IconName; hint?: string; accent?: "blue" | "cyan" | "green" | "amber" }) {
  const colorClass = { blue: "text-primary", cyan: "text-stream-cyan", green: "text-stream-green", amber: "text-stream-amber" }[accent];
  return (
    <div className="min-w-0 rounded-md border border-border/80 bg-card/75 p-4 panel-shadow transition-colors hover:border-primary/35">
      <div className="flex items-start justify-between gap-2">
        <span className="truncate text-[11px] font-medium text-muted-foreground">{label}</span>
        <Icon name={icon} className={cn("size-4 shrink-0", colorClass)} />
      </div>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-display text-[24px] font-semibold leading-none text-foreground">{value}</span>
        {change && <span className="inline-flex items-center gap-0.5 text-[10px] font-medium text-stream-green"><Icon name="ArrowUpRight" className="size-3" />{change}</span>}
      </div>
      {hint && <p className="mt-2 text-[10px] leading-4 text-muted-foreground">{hint}</p>}
    </div>
  );
}

export function TrafficGraph({ dense = false }: { dense?: boolean }) {
  const values = [34, 49, 38, 57, 42, 74, 54, 67, 45, 59, 82, 62, 51, 92, 64, 71, 56, 77, 49, 88, 59, 68, 44, 73];
  return (
    <div className={cn("relative min-w-0", dense ? "h-[122px]" : "h-[190px]")}>
      <div className="absolute inset-x-0 top-2 bottom-5 flex flex-col justify-between">
        {[0, 1, 2, 3].map((line) => <div key={line} className="border-t border-dashed border-border/70" />)}
      </div>
      <div className="absolute inset-x-1 top-2 bottom-5 flex items-end gap-[3px]">
        {values.map((value, index) => (
          <div key={`${index}-${value}`} className="relative flex h-full min-w-0 flex-1 items-end gap-px">
            <div className="bar-grow w-1/2 rounded-t-[2px] bg-primary/85" style={{ height: `${value}%`, animationDelay: `${index * 16}ms` }} />
            <div className="bar-grow w-1/2 rounded-t-[2px] bg-stream-cyan/55" style={{ height: `${Math.max(14, value * 0.68)}%`, animationDelay: `${index * 16 + 70}ms` }} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[9px] text-muted-foreground"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>Now</span></div>
    </div>
  );
}

export function ComparisonGraph() {
  return (
    <div className="relative h-[180px] min-w-0 px-2 pb-5 pt-3">
      <div className="absolute inset-0 flex flex-col justify-between px-1 pb-7"><i className="border-t border-dashed border-border/70" /><i className="border-t border-dashed border-border/70" /><i className="border-t border-dashed border-border/70" /><i className="border-t border-dashed border-border/70" /></div>
      <svg viewBox="0 0 520 155" preserveAspectRatio="none" className="absolute inset-0 h-[calc(100%-20px)] w-full overflow-visible">
        <defs>
          <linearGradient id="stream-area" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="var(--color-primary)" stopOpacity=".18" /><stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" /></linearGradient>
        </defs>
        <path d="M0 129 C40 122 45 118 80 114 S125 99 160 104 S202 91 240 86 S284 77 320 81 S365 56 400 62 S455 37 520 28 L520 155 L0 155 Z" fill="url(#stream-area)" />
        <path d="M0 129 C40 122 45 118 80 114 S125 99 160 104 S202 91 240 86 S284 77 320 81 S365 56 400 62 S455 37 520 28" fill="none" stroke="var(--color-primary)" strokeWidth="2.8" />
        <path d="M0 139 C40 137 45 133 80 136 S125 126 160 132 S202 122 240 128 S284 116 320 124 S365 112 400 118 S455 106 520 112" fill="none" stroke="var(--color-stream-cyan)" strokeDasharray="5 5" strokeWidth="2" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex justify-between text-[9px] text-muted-foreground"><span>12 AM</span><span>6 AM</span><span>12 PM</span><span>6 PM</span><span>Now</span></div>
    </div>
  );
}

export function ArchitectureMap({ compact = false }: { compact?: boolean }) {
  return (
    <div className={cn("relative overflow-hidden rounded-md border border-border/80 bg-background/35", compact ? "p-4" : "p-5 sm:p-7")}>
      <div className="absolute inset-0 grid-fade opacity-30" />
      <div className="relative mx-auto grid max-w-[720px] grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-x-2 gap-y-3 sm:gap-x-4">
        <div className="col-start-3 row-start-1 justify-self-center"><Node icon="Users" label="LEARNERS" description="Any device" active /></div>
        <FlowPipe className="col-start-3 row-start-2 -mt-3 h-8 justify-self-center" />
        <div className="col-span-2 col-start-1 row-start-3 justify-self-end"><Node icon="Database" label="NEAREST EDGE" description="Cache · Mumbai" active /></div>
        <div className="col-span-2 col-start-4 row-start-3 justify-self-start"><Node icon="Database" label="NEAREST EDGE" description="Cache · Singapore" /></div>
        <FlowPipe className="col-start-2 row-start-4 h-8 justify-self-center" />
        <FlowPipe className="col-start-4 row-start-4 h-8 justify-self-center" />
        <div className="col-start-3 row-start-5 justify-self-center"><Node icon="Zap" label="STREAM GATEWAY" description="Adaptive delivery" accent /></div>
        <FlowPipe className="col-start-3 row-start-6 h-8 justify-self-center" />
        <div className="col-span-2 col-start-1 row-start-7 justify-self-end"><Node icon="Layers3" label="PROCESSING" description="Encode · Package" /></div>
        <div className="col-span-2 col-start-4 row-start-7 justify-self-start"><Node icon="HardDrive" label="ORIGIN STORAGE" description="Private objects" /></div>
        {!compact && <div className="col-span-5 row-start-8 mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-border/60 pt-4 text-[10px] text-muted-foreground"><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-primary" />Fast path · edge cache</span><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-stream-cyan" />Standards-ready · HLS</span><span className="inline-flex items-center gap-2"><i className="size-1.5 rounded-full bg-stream-green" />Private by default</span></div>}
      </div>
    </div>
  );
}

function Node({ icon, label, description, active = false, accent = false }: { icon: IconName; label: string; description: string; active?: boolean; accent?: boolean }) {
  return (
    <div className={cn("relative z-10 flex min-w-[116px] items-center gap-2.5 rounded-md border bg-card/90 px-3 py-2 shadow-xl sm:min-w-[150px]", active ? "border-primary/40" : accent ? "border-stream-cyan/40" : "border-border/90")}>
      <span className={cn("grid size-8 shrink-0 place-items-center rounded border border-border/75 bg-background", accent ? "text-stream-cyan" : active ? "text-primary" : "text-muted-foreground")}><Icon name={icon} className="size-4" /></span>
      <span className="min-w-0"><span className="block truncate text-[8px] font-semibold tracking-[.07em] text-foreground sm:text-[9px]">{label}</span><span className="mt-0.5 block truncate text-[8px] text-muted-foreground sm:text-[9px]">{description}</span></span>
      {active && <span className="node-pulse absolute -right-1 -top-1 size-2 rounded-full bg-stream-green" />}
    </div>
  );
}

function FlowPipe({ className }: { className?: string }) {
  return <div className={cn("relative w-px bg-border", className)}><div className="absolute inset-x-0 top-0 h-full overflow-hidden"><div className="packet absolute left-[-2px] top-0 size-1.5 rounded-full bg-stream-cyan shadow-[0_0_8px_var(--color-stream-cyan)]" /></div></div>;
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[62px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-7">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-6 text-[12px] text-muted-foreground md:flex">
          <Link to="/$page" params={{ page: "platform" }} className={cn("transition-colors hover:text-foreground", active === "platform" && "text-foreground")}>Platform</Link>
          <Link to="/$page" params={{ page: "technology" }} className={cn("transition-colors hover:text-foreground", active === "technology" && "text-foreground")}>Technology</Link>
          <Link to="/$page" params={{ page: "pricing" }} className={cn("transition-colors hover:text-foreground", active === "pricing" && "text-foreground")}>Pricing</Link>
          <Link to="/$page" params={{ page: "docs" }} className={cn("transition-colors hover:text-foreground", active === "docs" && "text-foreground")}>Documentation</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild><Link to="/$page" params={{ page: "auth" }}>Log in</Link></Button>
          <Button size="sm" className="h-8 px-3 text-[11px]" asChild><Link to="/$page" params={{ page: "auth" }}>Get started<Icon name="ArrowRight" className="size-3.5" /></Link></Button>
        </div>
      </div>
    </header>
  );
}

export const dashboardNavigation: { group: string; items: { label: string; page: string; icon: IconName }[] }[] = [
  { group: "WORKSPACE", items: [{ label: "Overview", page: "dashboard", icon: "BarChart3" }, { label: "Videos", page: "videos", icon: "Video" }, { label: "Courses", page: "courses", icon: "BookOpen" }, { label: "Users", page: "users", icon: "Users" }] },
  { group: "OBSERVABILITY", items: [{ label: "Analytics", page: "analytics", icon: "Activity" }, { label: "Bandwidth", page: "bandwidth", icon: "Gauge" }, { label: "Cache", page: "cache", icon: "Boxes" }, { label: "Storage", page: "storage", icon: "HardDrive" }, { label: "Infrastructure", page: "infrastructure", icon: "Network" }, { label: "Cost center", page: "costs", icon: "BarChart3" }] },
  { group: "DEVELOPERS", items: [{ label: "API keys", page: "api", icon: "Code2" }, { label: "Settings", page: "settings", icon: "Settings" }] },
];
