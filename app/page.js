import Button from "@/components/button";

export default function Home() {
  return (
    <main>
      <div className="max-w-xl my-12 mx-auto">
        <div className="flex items-center justify-center gap-3">
          <Button>Just</Button>
          <Button variant="secondary">Getting started</Button>
        </div>
      </div>
    </main>
  );
}
