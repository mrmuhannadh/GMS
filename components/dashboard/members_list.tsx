import Member_Card_Tile from "./member_card";

const MembersList = () => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow w-full">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          Team Members
        </div>
        <div className="text-sm text-muted-foreground">
          Invite your team members to collaborate.
        </div>
      </div>
      <div className="p-6 pt-0 grid gap-6">
        <Member_Card_Tile />
        <Member_Card_Tile />
        <Member_Card_Tile />
        <Member_Card_Tile />
        <Member_Card_Tile />
      </div>
    </div>
  );
};

export default MembersList;
