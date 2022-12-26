import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar";
import Link from "next/link";

function Notifications() {
  return (
    <Layout>
      <h1 className="text-4xl mb-4 text-gray-500">Notifications</h1>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div>
              <Link href="" className="font-semibold hover:underline">
                John Doe
              </Link>{" "}
              liked your{" "}
              <Link href="" className="text-socialBlue hover:underline">
                photo
              </Link>
            </div>
          </div>
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div>
              <Link href="" className="font-semibold hover:underline">
                John Doe
              </Link>{" "}
              liked your{" "}
              <Link href="" className="text-socialBlue hover:underline">
                photo
              </Link>
            </div>
          </div>
          <div className="flex gap-3 items-center border-b border-b-gray-100 p-4">
            <Avatar />
            <div>
              <Link href="" className="font-semibold hover:underline">
                John Doe
              </Link>{" "}
              liked your{" "}
              <Link href="" className="text-socialBlue hover:underline">
                photo
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default Notifications;
