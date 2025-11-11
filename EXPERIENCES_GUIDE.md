# Hướng dẫn sử dụng Experiences với danh sách Projects

## Tổng quan

Giờ đây bạn có thể thêm danh sách các dự án vào file MDX của experiences để hiển thị chi tiết về các công việc đã thực hiện tại mỗi công ty.

## Cấu trúc file MDX

### Frontmatter mới

Trong frontmatter của file MDX, bạn có thể thêm trường `projects` với cấu trúc như sau:

```yaml
---
title: Tên công ty
slug: /slug-cua-cong-ty
description: Mô tả công ty
image: /logo.png
tags: tag1,tag2,tag3
date: Tháng/Năm – Hiện tại
projects:
  - name: "Tên dự án 1"
    startDate: "2023-03-01"
    endDate: "2023-08-15"
    status: "completed"
    description: "Mô tả chi tiết về dự án"
    contributions:
      - "Đóng góp 1"
      - "Đóng góp 2"
      - "Đóng góp 3"
    technologies:
      - "Technology 1"
      - "Technology 2"
      - "Technology 3"
  - name: "Tên dự án 2"
    startDate: "2023-09-01"
    status: "ongoing"
    description: "Mô tả chi tiết về dự án đang thực hiện"
    contributions:
      - "Đóng góp 1"
      - "Đóng góp 2"
    technologies:
      - "Technology 1"
      - "Technology 2"
---
```

### Các trường của Project

- `name` (bắt buộc): Tên của dự án
- `startDate` (bắt buộc): Ngày bắt đầu (format: YYYY-MM-DD)
- `endDate` (tùy chọn): Ngày kết thúc (format: YYYY-MM-DD)
- `status` (tùy chọn): Trạng thái dự án
  - `"completed"`: Đã hoàn thành (mặc định)
  - `"ongoing"`: Đang thực hiện
  - `"paused"`: Tạm dừng
- `description` (bắt buộc): Mô tả chi tiết về dự án
- `contributions` (bắt buộc): Mảng các đóng góp chính của bạn
- `technologies` (tùy chọn): Mảng các công nghệ đã sử dụng

## Ví dụ thực tế

### File tiếng Anh (`experiences/en/1.dxc.mdx`)

```yaml
---
title: DXC Technology
slug: /dxc
description: a great company
image: /dxcLogo.png
tags: nextjs,i18n,mdx,starter,robots,sitemap
date: February 2023 – Present
projects:
  - name: "E-commerce Platform Migration"
    startDate: "2023-03-01"
    endDate: "2023-08-15"
    status: "completed"
    description: "Lead the migration of a large-scale e-commerce platform from monolithic architecture to microservices architecture, improving scalability and performance by 40%."
    contributions:
      - "Designed and implemented microservices architecture using Node.js and Docker"
      - "Migrated database from MySQL to PostgreSQL for better performance"
      - "Implemented CI/CD pipeline using Jenkins and Docker"
      - "Reduced page load time from 4s to 1.5s"
    technologies:
      - "Node.js"
      - "React"
      - "PostgreSQL"
      - "Docker"
      - "Jenkins"
      - "AWS"
---
```

### File tiếng Việt (`experiences/vi/1.dxc.mdx`)

```yaml
---
title: DXC Technology
slug: /dxc
description: Một công ty tuyệt vời
image: /dxcLogo.png
tags: nextjs,i18n,mdx,starter,robots,sitemap
date: Tháng 2 2023 – Hiện tại
projects:
  - name: "Di chuyển Nền tảng Thương mại điện tử"
    startDate: "2023-03-01"
    endDate: "2023-08-15"
    status: "completed"
    description: "Dẫn dắt việc di chuyển nền tảng thương mại điện tử quy mô lớn từ kiến trúc đơn nguyên sang kiến trúc vi dịch vụ, cải thiện khả năng mở rộng và hiệu suất 40%."
    contributions:
      - "Thiết kế và triển khai kiến trúc vi dịch vụ sử dụng Node.js và Docker"
      - "Di chuyển cơ sở dữ liệu từ MySQL sang PostgreSQL để có hiệu suất tốt hơn"
      - "Triển khai pipeline CI/CD sử dụng Jenkins và Docker"
      - "Giảm thời gian tải trang từ 4s xuống 1.5s"
    technologies:
      - "Node.js"
      - "React"
      - "PostgreSQL"
      - "Docker"
      - "Jenkins"
      - "AWS"
---
```

## Hiển thị

Danh sách projects sẽ được hiển thị tự động ở cuối trang experience details với:

- **Tiêu đề dự án** và **thời gian thực hiện**
- **Badge trạng thái** (Hoàn thành/Đang thực hiện/Tạm dừng)
- **Mô tả chi tiết** về dự án
- **Danh sách đóng góp** với bullet points
- **Tags công nghệ** đã sử dụng

## Component

Component hiển thị được đặt tại `components/experiences/ProjectList.tsx` với các tính năng:

- Responsive design
- Dark mode support
- Animation effects
- Status badges với màu sắc khác nhau
- Technology tags với styling phù hợp

## Types

Types được định nghĩa trong `types/experiences.ts`:

```typescript
export interface Project {
  name: string;
  startDate: string;
  endDate?: string;
  description: string;
  contributions: string[];
  technologies?: string[];
  status?: "completed" | "ongoing" | "paused";
}
```

## Lưu ý

1. Ngày tháng nên theo format `YYYY-MM-DD` để hiển thị đúng
2. `endDate` không bắt buộc - nếu không có sẽ hiển thị "Hiện tại"
3. `status` không bắt buộc - mặc định là "completed"
4. `technologies` không bắt buộc - nếu không có sẽ không hiển thị section công nghệ
5. Nội dung MDX thông thường vẫn được hiển thị bên trên danh sách projects

## Test

Để test chức năng:

1. Start development server: `pnpm dev`
2. Truy cập: `http://localhost:3001/experiences/dxc` (hoặc port tương ứng)
3. Kiểm tra cả ngôn ngữ tiếng Anh và tiếng Việt

## Tạo experience mới

Khi tạo experience mới:

1. Copy file MDX mẫu từ `experiences/en/1.dxc.mdx`
2. Thay đổi thông tin trong frontmatter
3. Cập nhật nội dung MDX theo nhu cầu
4. Đặt file trong thư mục ngôn ngữ tương ứng (`en/`, `vi/`, `ja/`, `zh/`)
