export function PresentationPreview({ charts }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Imported Charts</h3>
      {charts.length === 0 ? (
        <p>No charts imported yet. Import charts from the "Import Charts" tab.</p>
      ) : (
        <ul className="list-disc pl-5">
          {charts.map((chart, index) => (
            <li key={index}>
              {chart.name} ({chart.type})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

