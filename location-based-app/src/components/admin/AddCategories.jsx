"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Plus } from "lucide-react";

const AddCategories = () => {
  const [open, setOpen] = useState(false);

  const handleAddCategory = (formData) => {
    console.log("formData", formData);
    const file = formData.get("thumbnail");
    console.log("file", file);    
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="gap-2 bg-indigo-600 hover:bg-indigo-700"
      >
        <Plus size={16} />
        Add Category
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Category</DialogTitle>
          </DialogHeader>

          <form action={handleAddCategory} className="space-y-4">
            <div className="space-y-1">
              <Label>Title</Label>
              <Input required type="text" name="title" placeholder="Category title" />
            </div>

            <div className="space-y-1">
              <Label>Description</Label>
              <Textarea required name="description" placeholder="Short description" />
            </div>

            <div className="space-y-1">
              <Label>Thumbnail</Label>
              <Input required name="thumbnail" type="file" />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                Save Category
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCategories;
