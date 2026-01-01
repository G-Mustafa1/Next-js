"use client";

import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
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
import { uploadImage } from "@/app/actions/uploadImage";
import { addCategories } from "@/app/actions/categories";

const AddCategories = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const formData = new FormData(formRef.current);

      const title = formData.get("title");
      const description = formData.get("description");
      const file = formData.get("thumbnail");

      const newErrors = {};
      if (!title?.trim()) newErrors.title = "Title is required";
      if (!description?.trim()) newErrors.description = "Description is required";
      if (!file || file.size === 0) newErrors.thumbnail = "Image is required";

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const imageUrl = await uploadImage(formData);
      if (!imageUrl) throw new Error("Image upload failed");

      const obj = {
        title,
        description,
        thumbnail: imageUrl,
      };

      const res = await addCategories(obj);

      if (res?.error) throw new Error(res.message);

      await Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Category added successfully",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      formRef.current?.reset();
      setOpen(false);
    } catch (error) {
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: error.message || "Something went wrong",
        showConfirmButton: false,
        timer: 2500,
      });
    } finally {
      setLoading(false);
    }
  };

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

          <form ref={formRef} onSubmit={handleAddCategory} className="space-y-4">
            {/* Title */}
            <div>
              <Label>Title</Label>
              <Input name="title" placeholder="Category title" />
              {errors.title && (
                <p className="text-sm text-red-600">{errors.title}</p>
              )}
            </div>

            {/* Description */}
            <div>
              <Label>Description</Label>
              <Textarea name="description" placeholder="Short description" />
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description}</p>
              )}
            </div>

            {/* Thumbnail */}
            <div>
              <Label>Thumbnail</Label>
              <Input name="thumbnail" type="file" accept="image/*" />
              {errors.thumbnail && (
                <p className="text-sm text-red-600">{errors.thumbnail}</p>
              )}
            </div>



            <div className="flex justify-end gap-2 pt-2">
              <Button
                type="button"
                variant="outline"
                disabled={loading}
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                disabled={loading}
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700"
              >
                {loading ? "Adding..." : "Add Category"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCategories;
