import { UploadArea } from './UploadClient'

export default function Upload() {
  return (
    <section className="py-20" id="upload">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Analysis
          </h2>
          <p className="text-xl text-gray-600">
            Upload your chat history and get instant insights
          </p>
        </div>

        <UploadArea />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Supported formats: JPG, PNG • Max file size: 10MB
          </p>
        </div>
      </div>
    </section>
  )
} 