"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddSubCategory = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <Button
        onClick={() => setOpen(true)}
        className="gap-2 bg-indigo-600 hover:bg-indigo-700"
      >
        <Plus size={16} />
        Add Sub Category
      </Button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add New Sub Category</DialogTitle>
          </DialogHeader>

          <form className="space-y-4">
            {/* Title */}
            <div className="space-y-1">
              <Label>Sub Category Title</Label>
              <Input placeholder="e.g Birthday Party" />
            </div>

            {/* Parent Category */}
            <div className="space-y-1">
              <Label>Parent Category</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-1">
              <Label>Description</Label>
              <Textarea
                placeholder="Short description"
                className="resize-none"
              />
            </div>

            {/* Image */}
            <div className="space-y-1">
              <Label>Thumbnail Image</Label>
              <Input type="file" />
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
                Save Sub Category
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddSubCategory;
