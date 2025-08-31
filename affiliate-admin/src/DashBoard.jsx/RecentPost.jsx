function RecentPost() {
  return (
    <div className="ml-96 mt-8">
      <div className="text-2xl font-bold mb-4">Recent Posts</div>

      <div className="overflow-x-auto">
        <table className="w-2xl border border-gray-200 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-2 px-4 border-b border-gray-200">Title</th>
              <th className="text-right py-2 px-4 border-b border-gray-200">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">Post 1</td>
              <td className="py-2 px-4 border-b border-gray-200 text-right">2025-08-31</td>
            </tr>
            <tr className="hover:bg-gray-50 bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">Post 2</td>
              <td className="py-2 px-4 border-b border-gray-200 text-right">2025-08-30</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200">Post 3</td>
              <td className="py-2 px-4 border-b border-gray-200 text-right">2025-08-29</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentPost;
