import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Welcome to OmniThink</h1>
      <p className="text-lg text-gray-600 mb-8">
        Generate high-quality, insightful long-form articles using AI-powered cognitive writing processes.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Mind Map Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Create hierarchical mind maps of concepts related to your topic.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Outline Creation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Generate structured outlines based on the mind map.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Article Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Produce comprehensive articles with inline citations.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Article Polishing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Refine and polish the generated content automatically.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Button asChild size="lg" className="w-full md:w-auto">
        <Link to="/create">Start Writing</Link>
      </Button>
    </div>
  );
};

export default Index;