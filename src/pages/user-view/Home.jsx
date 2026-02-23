import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { jobByRole } from "@/config";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">

      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome{user?.UserName ? `, ${user.UserName}` : ""} 👋
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Find your dream job with Apna Jobs. Search thousands of job listings
          from top companies.
        </p>
        <div className="flex gap-4">
          <Button
            className="bg-white text-blue-700 hover:bg-gray-200"
            onClick={() => navigate("/user/job")}
          >
            Browse Jobs
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-700"
            onClick={() => navigate("/user/search")}
          >
            Search Jobs
          </Button>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {jobByRole.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {job.label}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                Company: {job.company}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Location: Remote
              </p>
              <Button
                size="sm"
                onClick={() => navigate("/user/job")}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 bg-muted">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["IT", "Marketing", "Finance", "Design"].map((category) => (
            <div
              key={category}
              onClick={() => navigate("/user/jobs")}
              className="cursor-pointer bg-white p-6 text-center rounded-lg shadow hover:shadow-md transition font-medium"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Apply?
        </h2>
        <p className="text-muted-foreground mb-6">
          Create your profile and start applying today.
        </p>
        <Button onClick={() => navigate("/user/account")}>
          Go to My Account
        </Button>
      </section>

    </div>
  );
};

export default Home;