import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle } from "lucide-react";

export const AIRelevantSnippets = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <AlertCircle className="h-4 w-4 text-gray-500" />
        <h4 className="font-medium text-gray-700">Analysis Evidence:</h4>
      </div>
      <ScrollArea className="h-[200px] pr-4 border rounded-md p-3 bg-gray-50">
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            <p className="italic mb-2">Key conversation moments identified by AI:</p>
            <ul className="space-y-2 list-disc pl-4">
              <li>No AI-identified snippets available yet</li>
            </ul>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};