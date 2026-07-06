-- Rename isPublic → isVisible in Experience
ALTER TABLE "Experience" RENAME COLUMN "isPublic" TO "isVisible";

-- Add isVisible to remaining models (default true = visible, preserves existing data)
ALTER TABLE "Skill" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "Education" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "Publication" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "License" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "VolunteerExperience" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
ALTER TABLE "Organization" ADD COLUMN "isVisible" BOOLEAN NOT NULL DEFAULT true;
