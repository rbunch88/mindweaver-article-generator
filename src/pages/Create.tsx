import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement article generation
    setTimeout(() => {
      setLoading(false);
      navigate("/results");
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create New Article</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Input
                id="topic"
                placeholder="Enter your article topic"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="search-engine">Search Engine</Label>
              <Select>
                <SelectTrigger id="search-engine">
                  <SelectValue placeholder="Select search engine" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="bing">Bing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="results">Number of Search Results</Label>
              <Input
                id="results"
                type="number"
                min="1"
                max="10"
                defaultValue="5"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="model">Language Model</Label>
              <Select>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Select language model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt4">GPT-4</SelectItem>
                  <SelectItem value="gpt35">GPT-3.5</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="depth">Mind Map Depth</Label>
              <Input
                id="depth"
                type="number"
                min="1"
                max="5"
                defaultValue="3"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Generating..." : "Generate Article"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Create;