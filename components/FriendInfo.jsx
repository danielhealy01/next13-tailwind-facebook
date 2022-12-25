import Avatar from "./Avatar";

function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar />
      <div>
        <h3 className="font-bold text-xl">Jane Doe</h3>
        <div className="text-sm leading-3">Mutual Friends</div>
      </div>
    </div>
  );
}

export default FriendInfo