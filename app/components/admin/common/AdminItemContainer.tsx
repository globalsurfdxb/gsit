"use client";
 
import React, { useState } from "react";
import { Maximize2, Minimize2, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface AdminItemContainerProps {
  children: React.ReactNode;
  expansion?: boolean;
  // Pass a handler to show a remove button next to the expand/collapse
  // control; omit it (the default) to keep the header free of a close button.
  onRemove?: () => void;
}

const AdminItemContainer = ({
  children,
  expansion = true,
  onRemove,
}: AdminItemContainerProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const childArray = React.Children.toArray(children);
  const [header, ...content] = childArray;

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 text-gray-600">{header}</div>

        <div className="flex items-center gap-1 mr-4">
          {expansion && (
            <button
              type="button"
              aria-label={isExpanded ? "Collapse section" : "Expand section"}
              onClick={() => setIsExpanded((prev) => !prev)}
              className="p-1.5 rounded-full text-description-color cursor-pointer hover:text-primary hover:bg-cream-background hover:scale-110 transition-all duration-300 ease-in-out"
            >
              {isExpanded ? (
                <Minimize2 size={15} className="-rotate-45" />
              ) : (
                <Maximize2 size={15} className="-rotate-45" />
              )}
            </button>
          )}

          {onRemove && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Remove section"
                  className="p-1.5 rounded-full text-red-500 cursor-pointer hover:bg-red-50 hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <X size={15} />
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Remove this section?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently remove the section and everything inside it. This
                    action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={onRemove}>Remove</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
        </div>
      </div>
 
      {expansion ? (
        <div
          className={`grid transition-[grid-template-rows,border-top] duration-500 ease-in-out ${
            isExpanded
              ? "border-t border-black/20"
              : "border-t-0 border-black/20"
          }`}
          style={{
            gridTemplateRows: isExpanded ? "1fr" : "0fr",
          }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2">{content}</div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2">{content}</div>
      )}
    </div>
  );
};
 
export default AdminItemContainer;