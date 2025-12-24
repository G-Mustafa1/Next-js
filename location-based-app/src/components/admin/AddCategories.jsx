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

          <form className="space-y-4">
            <div className="space-y-1">
              <Label>Title</Label>
              <Input placeholder="Category title" />
            </div>

            <div className="space-y-1">
              <Label>Description</Label>
              <Textarea placeholder="Short description" />
            </div>

            <div className="space-y-1">
              <Label>Thumbnail</Label>
              <Input type="file" />
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
